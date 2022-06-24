import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from '../database/entities/index';

const listEntities = Object.values(entities);

export const databaseProvider = TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({})],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        return {
            type: 'postgres',
            host: configService.get<string>('Host'),
            port: configService.get<number>('Port'),
            username: configService.get<string>('User'),
            password: configService.get<string>('Password'),
            database: configService.get<string>('Database'),
            entities: listEntities,
            synchronize: false,
            url: configService.get<string>('DATABASE_UR'),
            extra: {
                ssl: {
                  rejectUnauthorized: false,
                },
            },
            logging: true,
            // url: configService.get<string>('DATABASE_UR'),
            cache: {
                duration: 1500,
            },
        };
    },
});
