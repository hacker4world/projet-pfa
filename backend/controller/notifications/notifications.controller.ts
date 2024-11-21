import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Notification } from "../../entity/Notification.entity";

export async function notifications(
  request: Request,
  response: Response
): Promise<void> {
  const reference = request.params.reference;

  let notificationsRepository = AppDataSource.getRepository(Notification);

  let notifications = await notificationsRepository.find({ where: { reference } });

  response.status(200).json({ notifications });
}
