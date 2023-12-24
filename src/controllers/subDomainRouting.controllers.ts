import { Controller, Get, HostParam, Ip } from '@nestjs/common';

@Controller({ path: '/ip', 
// host: ':app:domain.com' 
})
export class IpsController {
    // get clients ip
    @Get()
    getIp(
        @HostParam() params: Record<string, any>,
        @Ip() ip: string
    ) { 
        return {
            params: params,
            ip: ip
        }
    }
}
