Document containing the step by step provisioning of a MongoDB database for the NextJS App using the mongoose ORM.

1. Create a database on Atlas which will be empty by default.
2. Copy connection string to the database and save to environment variables.
3. Install necessary mongodb packages.
4. Create a connectToDatabase ts or js file.
5. Copy MongoDB configuration from authjs website [https://authjs.dev/reference/adapter/mongodb#add-the-mongodb-client] - this establishes a connection to your DB
6. Create a 'models' folder which will contain all models.
7. Create the userModel.ts file.
8. Inside this file, define the interface (type) of the user object and appointment object.
9. From this interface, define the Schema of both objects
10. From the Schema, create and export the new model

So far, I have done the following:

1. created the atlas database
2. Created the User Schema
3. Created the Appointment Schema
4. Established a Mongo Client Connection
5. Created the dynamic auth route
6. Configured the auth route. Used github credential as an example

What is Next:

1. Configure Google OAuth Credentials
2. Customize Google OAuth Page (Add Logo)
3. Configure the Google Provider on Next
4. Configure the Credentials Provider
5. Custom Login Page

Steps to persist user in DB

1.  Make a post route which receives user data and stores it in the DB
2.  Make a callback in the authConfig which makes the POST request with the data returned from the Oauth signin

Algorithm of the callback

1. Checks which provider is being used
2. Checks if user exists in DB
3. Makes POST call to the endpoint with the user data in the body
4. saves and returns user
