/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DownloadRequest } from "./DownloadRequest";
import { DownloadRequestCountArgs } from "./DownloadRequestCountArgs";
import { DownloadRequestFindManyArgs } from "./DownloadRequestFindManyArgs";
import { DownloadRequestFindUniqueArgs } from "./DownloadRequestFindUniqueArgs";
import { DeleteDownloadRequestArgs } from "./DeleteDownloadRequestArgs";
import { DownloadRequestService } from "../downloadRequest.service";
@graphql.Resolver(() => DownloadRequest)
export class DownloadRequestResolverBase {
  constructor(protected readonly service: DownloadRequestService) {}

  async _downloadRequestsMeta(
    @graphql.Args() args: DownloadRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DownloadRequest])
  async downloadRequests(
    @graphql.Args() args: DownloadRequestFindManyArgs
  ): Promise<DownloadRequest[]> {
    return this.service.downloadRequests(args);
  }

  @graphql.Query(() => DownloadRequest, { nullable: true })
  async downloadRequest(
    @graphql.Args() args: DownloadRequestFindUniqueArgs
  ): Promise<DownloadRequest | null> {
    const result = await this.service.downloadRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DownloadRequest)
  async deleteDownloadRequest(
    @graphql.Args() args: DeleteDownloadRequestArgs
  ): Promise<DownloadRequest | null> {
    try {
      return await this.service.deleteDownloadRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}