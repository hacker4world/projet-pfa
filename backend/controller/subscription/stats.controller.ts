import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Unpaidbills } from "../../entity/Unpaidbills.entity";
import { Notification } from "../../entity/Notification.entity";
import { PendingRequest } from "../../entity/PendingRequests.entity";
import { RejectedRequest } from "../../entity/RejectedRequests.entity";

export async function stats(
  request: Request,
  response: Response
): Promise<void> {
  let reference = request.params.reference;

  const unpaidBills = AppDataSource.getRepository(Unpaidbills);
  const notificationsRepository = AppDataSource.getRepository(Notification);
  const pendingRequestsRepository = AppDataSource.getRepository(PendingRequest);
  const rejectedRequestRepository =
    AppDataSource.getRepository(RejectedRequest);

  if (!reference) {
    response.status(402).send("unauthorized");
    return;
  }

  const bills = await unpaidBills.find({ where: { reference } });
  const notifications = await notificationsRepository.find({
    where: { reference },
  });
  const pendingRequests = await pendingRequestsRepository.find({
    where: { reference },
  });
  const rejectedRequests = await rejectedRequestRepository.find({
    where: { reference },
  });

  response.status(200).json({
    unpaidBills: bills.length,
    notifications: notifications.length,
    pendingRequests: pendingRequests.length,
    rejectedRequests: rejectedRequests.length,
  });
}
