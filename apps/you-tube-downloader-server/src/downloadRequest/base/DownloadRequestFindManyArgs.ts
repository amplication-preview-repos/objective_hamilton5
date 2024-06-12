/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DownloadRequestWhereInput } from "./DownloadRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DownloadRequestOrderByInput } from "./DownloadRequestOrderByInput";

@ArgsType()
class DownloadRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DownloadRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DownloadRequestWhereInput, { nullable: true })
  @Type(() => DownloadRequestWhereInput)
  where?: DownloadRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [DownloadRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DownloadRequestOrderByInput], { nullable: true })
  @Type(() => DownloadRequestOrderByInput)
  orderBy?: Array<DownloadRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DownloadRequestFindManyArgs as DownloadRequestFindManyArgs };
