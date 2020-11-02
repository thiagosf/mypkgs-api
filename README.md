# mypkgs-api

API to [mypkgs.app](http://mypkgs.app) consume.

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
        - `category` (string) - Category
        - `tags` (string) - Tags separeted by comma
        - `notes` (string) - User notes about package
- [ ] DELETE /package/:id
- [ ] PUT /package/:id
- [ ] GET /package/:id

- [ ] GET /favorites
- [ ] POST /favorites
    * Parameters:
        - `user_id` (string) - User ID
- [ ] DELETE /favorites/:id

## References

[Get a repository](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-a-repository)
Example: https://api.github.com/repos/thiagosf/skitter

[Repository commits](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-commits)
Example: https://api.github.com/repos/thiagosf/skitter/commits?per_page=1
