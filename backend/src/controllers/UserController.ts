import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{name: 'Joao', email: 'email@joao.com'}];

export default {
  async index(request: Request, response: Response) {
    return response.json(users);
  },
  async create(request: Request, response: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name:'joao', 
        email:'email@joao.com'
      },
      message: { 
        subject:'Bem-vindo', 
        content:'Bora usar esse sistema ai colega'
      }}
    );

    return response.status(201).end();
  }
}