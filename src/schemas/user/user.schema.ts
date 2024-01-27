import { ACCOUNT_STATUS, ACCOUNT_TYPE } from '../../constants/account.constants';
import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Address, AddressSchema } from '../common/address.schema';

@Schema({
    timestamps: true,
})

export class User {
    // name
    @Prop({ required: true })
    name: string;

    // email
    @Prop({ required: true })
    email: string;

    // password
    @Prop({ required: true, select: false })
    password: string;

    // age
    @Prop()
    age?: number;

    // phone
    @Prop({ required: true })
    phone?: string;

    // status
    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_STATUS),
        default: ACCOUNT_STATUS.ACTIVE,
    })
    status?: ACCOUNT_STATUS;

    // account type
    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_TYPE),
        immutable: true,
        required: true
    })
    accountType: ACCOUNT_TYPE;

    // social media links
    @Prop({ default: [] })
    social?: string[]

    // is email verified
    @Prop({ default: false })
    isEmailVerified?: boolean

    // addess
    @Prop({
        type: AddressSchema,
        required: true
    })
    address: Address

    // metadata
    @Prop(raw({ type: Object }))
    metadata: any;
}

const schema = SchemaFactory.createForClass(User)

// export const User_Model = "User"
export const User_Model = User.name

export const UserSchema = schema