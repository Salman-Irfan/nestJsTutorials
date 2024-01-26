import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory, OnModuleInit {
    constructor(private config: ConfigService) { }

    // mongoose options factory
    createMongooseOptions():
        | MongooseModuleOptions
        | Promise<MongooseModuleOptions> {
        const uri = this.config.get('MONGODB_URI');
        return {
            uri,
        };
    }

    // onModuleInit hook
    async onModuleInit() {
        try {
            // Connect to MongoDB using the configured options
            await mongoose.connect(this.config.get('MONGODB_URI'), {
            });
            console.log(`Connected to MongoDB at ${this.config.get('MONGODB_URI')}`);
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error.message);
        }
    }
}
