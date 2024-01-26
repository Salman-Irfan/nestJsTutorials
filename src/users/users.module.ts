import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { AccountController } from "./controllers/accounts.controller";
import { UsersService } from "./services/users.service";
import { UserAgentClassMiddleware, userAgent } from "./middlewares/user-agent.middleware";
import { ConfigModule } from "@nestjs/config";

@Module({
    // imports
    imports: [ConfigModule],
    // controllers
    controllers: [
        UsersController,
        AccountController
    ],
    // providers
    providers: [
        UsersService
    ],
    // exports
    exports: [],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(userAgent) // names of middlewares in comma separated
            // .forRoutes('/module/users')
            .forRoutes({ path: '/module/users', method: RequestMethod.GET })
            // a new middleware
            .apply(UserAgentClassMiddleware)
            // .exclude() 
            .forRoutes({ path: '/module/users', method: RequestMethod.POST })
    }
}