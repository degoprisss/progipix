import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { databaseProvider } from "./database.service";

@Module({
    imports: [ConfigModule.forRoot(), databaseProvider],
    providers: [],
    controllers: []
})

export class DatabasePostgreSqlModule { }