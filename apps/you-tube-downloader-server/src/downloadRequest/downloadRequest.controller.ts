import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DownloadRequestService } from "./downloadRequest.service";
import { DownloadRequestControllerBase } from "./base/downloadRequest.controller.base";

@swagger.ApiTags("downloadRequests")
@common.Controller("downloadRequests")
export class DownloadRequestController extends DownloadRequestControllerBase {
  constructor(protected readonly service: DownloadRequestService) {
    super(service);
  }
}
