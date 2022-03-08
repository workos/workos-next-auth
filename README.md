# WorkOS next-auth

Make your Next.js apps enterprise-ready using [WorkOS](https://workos.com) and [next-auth](https://next-auth.js.org)

To get started clone the repo:

```bash
git clone https://github.com/workos-inc/workos-next-auth.git
```

To install the dependencies, navigate to the directory where you cloned the repo and run the following command:

```bash
npm install
```
## Setting up WorkOS
### getting your API keys

After you sign up at [WorkOS](https://dashboard.workos.com/signup), go to the `configuration` tab on the left and copy the Client ID.

Next, navigate to the API keys tab on the left and grab a secret key.
 

Finally, rename the `.env.example` file to `.env` and run the following command to start the development server at http://localhost:3000

```bash
npm run dev
```