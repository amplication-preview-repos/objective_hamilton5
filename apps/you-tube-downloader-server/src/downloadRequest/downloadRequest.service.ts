import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadRequestServiceBase } from "./base/downloadRequest.service.base";

@Injectable()
export class DownloadRequestService extends DownloadRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
