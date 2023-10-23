import { Controller , Get , Post , Patch ,  Delete , Param  , Req , Body , HttpCode }  from "@nestjs/common/decorators";
import {HttpStatus} from "@nestjs/common/"
import { Request } from "express";

@Controller('/user')
export class UserController {
@Get()
Find(@Body() data : any) : string[] {

    return data
    
} 
@Get('/:username')
FindOne( @Param("username") username : string) : string {
      
    
    return username
}
@Post()
Create() : string
{
    return "create User"
}
@Patch('/:username')
Update(@Param("username") username : string) : string
{
    return  "update User"
}
@Delete('/:username')
@HttpCode(HttpStatus.NO_CONTENT)
Delete(@Param("username") username : string) : string
{
    return "delete User " + username 
}


}