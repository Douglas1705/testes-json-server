import { NextFunction, Request, Response } from 'express';
import jsonServer from 'json-server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { LowdbSync } from 'lowdb';

const server = jsonServer.create();
const router = jsonServer.router('src/db/db.json');
const middlewares = jsonServer.defaults();

const SECRET_KEY = 'your_secret_key';
const expiresIn = '1h';

// Define the structure of your database
interface Database {
  users: Array<{
    id: number | string;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string;
    email: string;
    password: string;
    role: string;
    social: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  }>;
  tasks: Array<{
    id: number | string;
    priority: string;
    title: string;
    members: string[];
    commentsCount: number;
    completedCount: number;
    progress: number;
    startTime: string;
    endTime: string;
    timeEstimate: string;
    createdBy: string;
  }>;
}

// Create a token from a payload
function createToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token: string): JwtPayload | string | null {
  try {
    return jwt.verify(token, SECRET_KEY) as JwtPayload | string;
  } catch {
    return null;
  }
}

// Middleware for login
server.post('/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const db = router.db as LowdbSync<Database>; // Access to lowdb instance with explicit type
  const user = db.get('users').find({ email, password }).value();

  if (!user) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }

  const accessToken = createToken({ userId: user.id });
  res.status(200).json({ accessToken });
});

// Middleware for protected routes
server.use(/^(?!\/auth).*$/, (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
