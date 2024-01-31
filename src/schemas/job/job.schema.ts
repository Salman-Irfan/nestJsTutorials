import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User, User_Model } from "../user/user.schema";
import { Address, AddressSchema } from "../common/address.schema";
import { JOB_TYPE } from "src/constants/job.constants";


@Schema({
    timestamps: true,
})

export class Job {
    @Prop({ type: Types.ObjectId, ref: User_Model, required: true })
    employer: Types.ObjectId | User;

    @Prop({ required: true })
    companyName: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    experience: number;

    @Prop({ default: [] })
    tags?: string[];

    @Prop()
    salary?: String;

    @Prop({
        type: String,
        enum: Object.keys(JOB_TYPE),
        required: true,
    })
    type: JOB_TYPE;

    @Prop({ type: AddressSchema, required: true })
    location: Address;
}

// document
export type JobDocument = Job & Document

// schema
export const JobSchema = SchemaFactory.createForClass(Job)

// pre hooks

function populateEmployerMiddleware(next: Function) {
    this.populate({
        path: 'employer',
        select: {
            name: 1,
            email: 1
        }
    })
    next()
}

JobSchema.pre('find', populateEmployerMiddleware)

JobSchema.pre('findOne', populateEmployerMiddleware)

export const JOB_MODEL = Job.name; // Job
