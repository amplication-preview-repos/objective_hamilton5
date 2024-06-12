import { Module } from "@nestjs/common";
import { DownloadRequestModuleBase } from "./base/downloadRequest.module.base";
import { DownloadRequestService } from "./downloadRequest.service";
import { DownloadRequestController } from "./downloadRequest.controller";
import { DownloadRequestResolver } from "./downloadRequest.resolver";

@Module({
  imports: [DownloadRequestModuleBase],
  controllers: [DownloadRequestController],
  providers: [DownloadRequestService, DownloadRequestResolver],
  exports: [DownloadRequestService],
})
export class DownloadRequestModule {}
