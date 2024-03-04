# Notion API Website (NextJS + Netlify)

This website is built with NextJS and Typescript with a SGDS React frontend. The data is fetched from a Notion Database using the [Notion API](https://developers.notion.com/).

Jump to [Set Up Netlify](#set-up-netlify) if you have already set up your Notion API.

## Set Up Notion API

### Create Integration

[Create your integration](https://developers.notion.com/docs/create-a-notion-integration#getting-started) and set up your `NOTION_TOKEN` with the following **Capabilities** options cheked.

| Capabilities      | Check                    |
| ----------------- | ------------------------ |
| Content           | Read Content only        |
| Read Comments     | NA                       |
| User Capabilities | No User Information only |

---

### Add Integration to Database

[Follow these instructions](https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions) to add your integration to the intended Notion Database that you will be fetching your content from.

_Note: You will need to have full access rights for the intended Database's shared permissions._

---

### Retreive Databse ID

Retrieve your `NOTION_DATABASE_ID` by opening the intended Notion Database on your browser and obtain the 32-character string at the end of the URL.

```
https://www.notion.so/<NOTION_DATABASE_ID>
```

---

### Create .env file

Create a `.env` file in the project's root folder and add your **Secrets** as `NOTION_TOKEN` and `NOTION_DATABASE_ID`.

_IMPORTANT: Ensure that your secrets are secure and are not exposed / committed where it can be accessed publicly (ie add the relevant files to .gitignore)._

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

---

### Install dependencies

```
npm install
# or
yarn
```

---

### Start the server

```
npm run dev
# or
yarn dev
```

---

Open http://localhost:3000 with your browser to see the result.

---

## Set Up Netlify

### Create a Netlify Account

Create account at [Netlify](https://app.netlify.com/).

### Begin Deployment

To begin the deployment, navigate to [Start](https://app.netlify.com/start). This page can also be reached via **_Sites > Add New Site > Import An Existing Project_**

### Setup Deployment with GitHub

Click on **_Deploy with GitHub_**.

- If your GitHub account is not linked with Netlify, you will be prompted to connect your GitHub account and to **_Authorize Netlify_**.

- Thereafter, you will be prompted to select either - **_All Repositories_** or **_Only Select Repositories_** before clicking **_Install Netlify_**.

- Note: Selecting **_Only Select Repositories_** will require additional configuration if not initially granted permissions.

Select the repository that you would like to deploy to Netlify and ensure that you select the right branch to deploy in the **_Branch to Deploy_** field. The **_Site Settings_** will be auto-populated based on what Netlify reads in the `package.json`.

### Optional: Add Site Name

A random string will be provided if this field is left blank.

### Add Environment Variables

For this project, you will need to input your environment variables into Netlify via **_Add Environment Variables_**. Refer to section [Create .env file](#create-env-file)

### Deploy Website

Click on the **Deploy** button and wait for the website to build. Once it is done building, the App Netlify dashboard will let you know that your website is live.
