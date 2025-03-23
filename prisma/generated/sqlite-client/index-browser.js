
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  apiKey: 'apiKey',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InstanceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  userId: 'userId',
  status: 'status',
  qrCode: 'qrCode',
  webhookUrl: 'webhookUrl',
  webhookEnabled: 'webhookEnabled',
  sentMessages: 'sentMessages',
  receivedMessages: 'receivedMessages',
  credentials: 'credentials',
  lastActivity: 'lastActivity',
  authCreatedAt: 'authCreatedAt',
  authExpiresAt: 'authExpiresAt',
  authRefreshToken: 'authRefreshToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WebhookSettingsScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  notifyReceived: 'notifyReceived',
  notifySent: 'notifySent',
  notifyDelivery: 'notifyDelivery',
  notifyRead: 'notifyRead',
  maxRetries: 'maxRetries',
  retryInterval: 'retryInterval',
  secret: 'secret',
  headers: 'headers',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  remoteJid: 'remoteJid',
  fromMe: 'fromMe',
  messageType: 'messageType',
  content: 'content',
  messageId: 'messageId',
  hasMedia: 'hasMedia',
  mediaUrl: 'mediaUrl',
  caption: 'caption',
  mimeType: 'mimeType',
  fileName: 'fileName',
  status: 'status',
  statusUpdatedAt: 'statusUpdatedAt',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  name: 'name',
  number: 'number',
  remoteJid: 'remoteJid',
  pushName: 'pushName',
  isGroup: 'isGroup',
  profilePicture: 'profilePicture',
  about: 'about',
  lastActivity: 'lastActivity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActivityLogScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  action: 'action',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.WebhookLogScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  webhookUrl: 'webhookUrl',
  payload: 'payload',
  response: 'response',
  statusCode: 'statusCode',
  success: 'success',
  attempt: 'attempt',
  errorMessage: 'errorMessage',
  createdAt: 'createdAt'
};

exports.Prisma.InstanceUsageScalarFieldEnum = {
  id: 'id',
  instanceId: 'instanceId',
  date: 'date',
  messagesSent: 'messagesSent',
  messagesReceived: 'messagesReceived',
  mediaSent: 'mediaSent',
  mediaReceived: 'mediaReceived',
  totalMediaSize: 'totalMediaSize',
  apiCalls: 'apiCalls',
  webhookSent: 'webhookSent',
  memoryUsage: 'memoryUsage',
  cpuUsage: 'cpuUsage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsageLimitScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  instanceId: 'instanceId',
  isDefault: 'isDefault',
  maxMessagesSent: 'maxMessagesSent',
  maxMessagesReceived: 'maxMessagesReceived',
  maxMediaSent: 'maxMediaSent',
  maxMediaReceived: 'maxMediaReceived',
  maxMediaSize: 'maxMediaSize',
  maxApiCalls: 'maxApiCalls',
  maxWebhookCalls: 'maxWebhookCalls',
  timeWindowHours: 'timeWindowHours',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Instance: 'Instance',
  WebhookSettings: 'WebhookSettings',
  Message: 'Message',
  Contact: 'Contact',
  ActivityLog: 'ActivityLog',
  WebhookLog: 'WebhookLog',
  InstanceUsage: 'InstanceUsage',
  UsageLimit: 'UsageLimit'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
