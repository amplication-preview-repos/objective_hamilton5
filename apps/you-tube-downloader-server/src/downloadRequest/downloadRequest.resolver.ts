import * as graphql from "@nestjs/graphql";
import { DownloadRequestResolverBase } from "./base/downloadRequest.resolver.base";
import { DownloadRequest } from "./base/DownloadRequest";
import { DownloadRequestService } from "./downloadRequest.service";

@graphql.Resolver(() => DownloadRequest)
export class DownloadRequestResolver extends DownloadRequestResolverBase {
  constructor(protected readonly service: DownloadRequestService) {
    super(service);
  }
}
