const { app } = require('@azure/functions');
const { TableClient } = require('@azure/data-tables');

const TABLE_NAME = 'JoinFormSubmissions';

async function getTableClient() {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error('AZURE_STORAGE_CONNECTION_STRING is not configured');
  }

  const tableClient = TableClient.fromConnectionString(connectionString, TABLE_NAME);

  try {
    await tableClient.createTable();
  } catch (err) {
    if (err.statusCode !== 409) throw err;
  }

  return tableClient;
}

app.http('submitJoinForm', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'submitJoinForm',
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid request body' } };
    }

    if (!body.firstName || !body.lastName || !body.email) {
      return { status: 400, jsonBody: { error: 'First name, last name, and email are required' } };
    }

    try {
      const tableClient = await getTableClient();

      const entity = {
        partitionKey: 'submission',
        rowKey: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        firstName: body.firstName ?? '',
        lastName: body.lastName ?? '',
        email: body.email ?? '',
        phone: body.phone ?? '',
        interestAreas: JSON.stringify(body.interestAreas ?? []),
        partOfFamily: body.partOfFamily ?? '',
        receivedSalvation: body.receivedSalvation ?? '',
        immersedBaptism: body.immersedBaptism ?? '',
        baptismYear: body.baptismYear ?? '',
        attendedChurchBefore: body.attendedChurchBefore ?? '',
        churchDetails: body.churchDetails ?? '',
        comments: body.comments ?? '',
        submittedAt: new Date().toISOString(),
      };

      await tableClient.createEntity(entity);

      return { status: 200, jsonBody: { success: true } };
    } catch (err) {
      context.error('Failed to save join form submission:', err);
      return { status: 500, jsonBody: { error: 'Failed to save submission' } };
    }
  },
});
