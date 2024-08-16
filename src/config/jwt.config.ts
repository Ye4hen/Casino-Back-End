import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from '@nestjs/jwt'
import * as dotenv from 'dotenv'

dotenv.config()

export const getJWTConfig = async (
	configService: ConfigService
): Promise<JwtModuleOptions> => ({
	secret: process.env.JWT_SECRET
})