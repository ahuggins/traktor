# Traktor

A Cli tool to help extract data


## Intro/Installation

#### Basic Intro

This is a Node package which used [OCLIF](https://oclif.io/) to be built. That means you will need to install Node and NPM to your machine in order to use it.

## Open a Terminal

The easiest way to get to a Terminal is to open Spotlight (this is opened by `cmd + space`). You should see something that says "Spotlight Search"

In that, type "Terminal", it should show something like:

`Terminal -- Application`

Select that one and it should open a new Terminal.

### Check if Node/NPM are installed

In the "Terminal" run `node -v && npm -v` and if you see two version strings like (X.X.X where X is a number), then you should be good to go to the next step.

The easiest way to do that is to go to [nodejs.org](https://nodejs.org/en/download/) and then choose the appropriate installer.

For Mac you can probably use this link: [node-v16.17.0.pkg](https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg)

Once downloaded, you may have to double click the file in order for it to install.

### Node/NPM has been installed

We are going to just use Git to share code (I think it's easier than publishing new versions for quick changes because you can update with a `git pull` command rather than me publishing a new version of the Traktor tool, and then you having to update.

Somewhere on your computer, you have a "code" folder, hopefully you can navigate there with terminal commands, if not, just hit me up.

But when you get to the folder you want to store this application, then you need to run:

`git clone git@github.com:ahuggins/traktor.git`

This will create a new folder in the one you are in called `traktor`

Now you will want to `cd traktor` to enter that folder. (You only want to `git clone` one time... just navigate to the folder we just created in the future.)

### Install dependencies

Because this is a Node application (essentially) we need some dependencies in order to run our application. So you will need to run `npm install` in the directory. You will only need to do this after `git pull` in the future.

### Run Traktor

Most things should be installed now, there are a couple other tools that are required, but I tried to make this easy, so I setup a command you can run that should pull in the other tools needed.

Simply run:

`bin/dev Ready`

What this is doing is checking to see if you have [Homebrew](https://brew.sh/) installed, if you do it does nothing, if you dont it tries to install it.

> You may have to give it permission to install this.

Once Homebrew is installed, it then checks for the `chrome-cli` tool. If it is found, it does nothing, if not, it installs it with homebrew.

Ideally this should be done by running this command, but once those are installed, you should be good to go.

## Scraping data

This is probably what you are most interested in.

There are a couple things that are weird, and we may have to make some adjustments.

> SUPER IMPORTANT!
> 
> Only have one tab open with Machinery Pete loaded.
> 
> Also, dont have multiple chrome windows open. Only have one window, and one tab with Machinery Pete open. 
> 
> You can have other tabs open, but just dont have more than one window.

1. You need to have Chrome open in order for this to work
2. You should load Machinery Pete search results for the results you want
   1. As in, set the category, and other filters you want reflected and submit it. You'll want to start from the first page
3. 