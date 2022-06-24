import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type TokenMongoDocument = TokenMongo & Document;

@Schema()
export class TokenMongo {

    @Prop({ type: Date, default: Date, expires: '20h'})
    creationAt: Date

    @Prop()
    token: string
}

export const TokenMongoSchema = SchemaFactory.createForClass(TokenMongo);