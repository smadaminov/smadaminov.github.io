---
title: How to submit a patch for Open vSwitch
date: "2015-05-06T23:46:37.121Z"
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](https://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

First, create a new branch

git checkout -b <some_branch_name>

Second, make changes and commit them within that new branch

<changes...>
git add <changed files>
git commit -m "<commit message>"

Now it is time to create a patch and there are two ways to do that:
(1) with a cover letter; and
(2) without a cover letter

With cover letter

git format-patch master --cover-letter

Without cover letter

git format-patch master

Then format the patch (generated files)

Right before sending the patch let's check it using provided script

make check
./utilities/checkpatch.py <patch_file>

Now, it is time to submit patch

git send-email <patch-name>

Note
****

- email address to send patches for OvS: dev@openvswitch.org

- If you get an error: "git: 'send-email' is not a git command" then you may need to install a required package:

sudo apt install git-email

- If you get an error: "Unable to initialize SMTP properly" then you may need to configure 'gitconfig'.
Open the config

git config -e

and add the following lines:

[sendemail]
        from = sergey.madaminov@gmail.com
        smtpserver = smtp.gmail.com
        smtpserverport = 587
        smtpencryption = tls
        smtpuser = sergey.madaminov@gmail.com
