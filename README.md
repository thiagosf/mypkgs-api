# mypkgs-api

API to [mypkgs.app](http://mypkgs.app) consume.

## Dev

In the first time, you need install the dependencies first before up your containers. Why? For create `node_modules` in your host, this way your editor can use auto-complete. 

When there are new dependencies, you need to do this steps too.

```bash
docker-compose run web yarn install
docker-compose up
```

In the next times, just do it:

```bash
docker-compose up
```

## Test

```bash
docker-compose run web yarn test
```

## Production

@todo

## Todo

- [x] Docker
- [ ] Tests
- [ ] Rate limiter
- [ ] Service update package
- [ ] Service get `package-name` of packages

## Endpoints

- [ ] GET /users/github/login
- [ ] GET /users/profile/:username
- [ ] POST /users
    * Parameters:
        - `email` (string) - Email to create account
- [ ] POST /users/create-login-code
    * Parameters:
        - `email` (string) - Account email
- [ ] POST /users/login
    * Parameters:
        - `email` (string) - Account email
        - `code` (string) - Account code sent for email

- [ ] POST /package/url-info
    * Parameters:
        - `url` (string) - URL to get info about package
- [ ] POST /package
    * Parameters:
        - `url` (string) - URL to get info about package
        - `framework` (string) - framework
        - `topics` (string) - Topics separeted by comma
        - `notes` (string) - User notes about package
- [ ] DELETE /package/:id
- [ ] PUT /package/:id
- [ ] GET /package/:id

- [ ] GET /packages
- [ ] PUT /packages/:id
    * Parameters:
        - `framework` (string) - framework
        - `topics` (string) - Topics separeted by comma
        - `notes` (string) - User notes about package
- [ ] DELETE /packages/:id
- [ ] GET /packages/export

- [ ] GET /favorites
- [ ] POST /favorites
    * Parameters:
        - `user_id` (string) - User ID
- [ ] DELETE /favorites/:id

## Database

### Tables

#### `users`

* id (int)
* github_id (string, unique)
* github_url (string)
* username (string, unique)
* email (string, unique)
* avatar_url (string)
* bio (string)
* code_key (string, null, 6)
* code_expires (int, null)
* created_at (datetime)
* updated_at (datetime)
* deleted_at (datetime)

#### `languages`

* id (int)
* name (string, unique)

#### `frameworks`

* id (int)
* name (string, unique)

#### `framework_package_managers`

* id (int)
* framework_id (int)
* name (string)
* template_install (string) - Example: `npm install {{package_name}}`

#### `topics`

* id (int)
* name (string, unique)

#### `packages`

* id (int)
* languge_id (int)
* url (string, unique)
* repo_user_avatar_url (string)
* repo_username (string)
* repo_name (string)
* package_name (string) - Get it into `package.json` or similiar for another languages (`{name}.gemspec` for ruby, `composer.json` for php, and so on), this value will used to `Copy install` button
* description (string)
* homepage (string)
* last_commit_sha (string, 40)
* last_commit_message (string)
* last_commit_date (datetime)
* stargazers_count (int)
* open_issues_count (int)
* created_at (datetime)
* updated_at (datetime)
* deleted_at (datetime)

#### `package_topics`

* id (int)
* package_id (int)
* topic_id (int)

#### `user_packages`

* id (int)
* user_id (int)
* package_id (int)

#### `user_package_frameworks`

* id (int)
* user_package_id (int)
* framework_id (int)

#### `user_package_topics`

* id (int)
* user_package_id (int)
* topic_id (int)

## References

* [Get a repository](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-a-repository)
    * Example: https://api.github.com/repos/thiagosf/skitter
* [Repository commits](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-commits)
    * Example: https://api.github.com/repos/thiagosf/skitter/commits?per_page=1
* [Get all repository topics](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-all-repository-topics)
    > ```bash
    > curl \
    > -H "Accept: application/vnd.github.mercy-preview+json" \
    > https://api.github.com/repos/thiagosf/skitter/topics 
    > ```
