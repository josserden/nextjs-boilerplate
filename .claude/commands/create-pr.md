---
description: Create a pull request for the current branch against main
argument-hint: Optional PR title or description
---

# Create PR

Create a pull request for the current branch following the `.github/pull_request_template.md` structure.

## Step 1: Gather context

Run in parallel:

1. Get the current branch name and diff summary (`git log main..HEAD --oneline`)
2. Read `.github/pull_request_template.md`

## Step 2: Ask the user

Present a short summary (branch, commits) and ask:

- **Title** — suggest one based on branch name and commits; ask for confirmation or override

Do not ask for anything else.

## Step 3: Fill the PR template

Use `.github/pull_request_template.md`. Fill in:

- Description based on the commit diff
- Leave "Related Issue" blank
- Leave checklist items as-is (unchecked)

## Step 4: Check if branch is pushed

Run `git ls-remote --exit-code --heads origin <branch>`. This hits the remote directly, so it won't give a false negative if the local `origin/<branch>` tracking ref is stale or was never fetched. If it fails, the branch doesn't exist on the remote at all — notify the user it needs to be pushed first and wait for confirmation.

Otherwise, run `git fetch origin <branch>` then `git log origin/<branch>..<branch> --oneline` to check for unpushed commits. If any are found — notify the user that the branch needs to be pushed before creating the PR and wait for confirmation.

## Step 5: Create the PR

```bash
gh pr create --base main --title "<title>" --body "<body>"
```

## Step 6: Output

Print the PR URL.