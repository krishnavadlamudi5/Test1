import type { Request, Response } from 'express';
import { User } from '../models/user.js';

export async function createUser(req: Request, res: Response) {
  try {
    const user = new User(req.body);
    console.log(user)
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ 
      message: error instanceof Error ? error.message : 'Failed to save user data' 
    });
  }
}