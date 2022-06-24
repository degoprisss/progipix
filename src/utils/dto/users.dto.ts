import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    names: string;

    @ApiProperty()
    lastnames: string;

    @ApiProperty()
    phone: number;

    @ApiProperty({ type: 'email' })
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    photos: string

    @ApiProperty()
    state: boolean;

}