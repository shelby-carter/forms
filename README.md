To install packages run: `npm i`

Create `.env` file in the project root with the following contents: 

```
FILLOUT_API_KEY=<your-key>
FILLOUT_BASE_URL=https://api.fillout.com/v1
```

To run the project run: `docker-compose up`, if you have Docker installed. 

Alternatively just run `npm run start` from the project's root dir. 

Demo instance: https://railway.app/project/279e996b-0ef1-4717-87bc-2f3d00256c30/service/39cdaf36-4b85-42b1-8fff-8235fcc51219/settings

The endpoint can be accessed directly via this link: https://forms-production-464f.up.railway.app/cLZojxk94ous

If you want to apply filters or pagination you can pass them as a query params. 

```
page=1
limit=3
filters=[
  {
    "id": "bE2Bo4cGUv49cjnqZ4UnkW",
    "condition": "equals",
    "value": "Johnny"
  },
  {
    "id": "jB2qDRcXQ8Pjo1kg3jre2J",
    "condition": "equals",
    "value": "Human resources"
  }
]
```

Or just use this link: https://forms-production-464f.up.railway.app/cLZojxk94ous/filteredResponses?filters=[%20{%20%22id%22:%20%22bE2Bo4cGUv49cjnqZ4UnkW%22,%20%22condition%22:%20%22equals%22,%20%22value%22:%20%22Johnny%22%20},%20{%20%22id%22:%20%22jB2qDRcXQ8Pjo1kg3jre2J%22,%20%22condition%22:%20%22equals%22,%20%22value%22:%20%22Human%20resources%22%20}%20]

Current response looks something like this, though I'm not sure if the IDs will change randomly: 

<img width="1303" alt="image" src="https://github.com/shelby-carter/forms/assets/3995063/3b36fb5c-5e0d-4c13-9333-bcc79660d9ea">

