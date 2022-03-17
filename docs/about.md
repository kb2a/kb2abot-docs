---
sidebar_position: 1
---

# About

kb2abot is a powerful NodeJS module that allows you to easily interact with the Facebook Chat API and more!

-   **Object-oriented**
-   **Performant**
-   **Easy to use**

## Installation

NodeJS 16.14.0 or newer is required.

```bash
npm install kb2abot
yarn add kb2abot
pnpm add kb2abot
```

## Example usage

Create a report command (report bug/error to specific user on Facebook):

```js
import { Command } from 'kb2abot'

const khoakomlemID = '100007723935647'

class Report extends Command {
    keywords = ['report', 'bug']
    description = 'report bug/error to admin'
    guide = '<message>'
    permission = {
        _: '_',
    }

    async load() {}

    async onCall(thread, message, reply, api) {
        const msg = message.args[0]

        if (msg.length > 0) {
            await api.sendMessage(
                `"${msg}"\n\n-ID: ${message.senderID}`,
                khoakomlemID
            )
            return `Sent: ${msg}`
        }

        return 'Error: Empty message not allowed'
    }
}

const reportCommand = new Report()
```

Afterwards we add that command to a plugin:

```js
import { readFileSync } from 'fs'
import { resolve } from 'url'
import { Plugin } from 'kb2abot'

class MyPlugin extends Plugin {
    package = JSON.parse(
        readFileSync(new URL(resolve(import.meta.url, 'package.json')))
    )

    // Called after this plugin is constructored (you would wrap your "async this.commands.add(command)" in this function in order to load commands in synchronous)
    async load() {
        // Add report command to this plugin
        await this.commands.add(reportCommand)
    }

    // Called when this plugin is disabled
    async onDisable() {}

    // Called when this plugin is enabled
    async onEnable() {}
}

const myPlugin = new MyPlugin()
```

And we add that plugin to a plugin manager

```js
import { PluginManager } from 'kb2abot'
const configDirectory = './config'
const userdataDirectory = './userdata' // relative to cwd

const pluginManager = new PluginManager(configDirectory, userdataDirectory)
await pluginManager.add(myPlugin)
```

Finally, now we add pluginManager to hook function:

```js
import { Deploy, Datastore } from 'kb2abot'
import { readHJSON } from 'kb2abot/util/common'

Datastore.init('./datastores') // If you dont init datastore, your bot will be freeze and throw timeout error

const botOptions = readHJSON('./bot.hjson') // Read and parse bot.hjson file (relative to cwd)
```

botOptions is the options of your bot (see the example template at example-bot.hjson

```js
const client = await Deploy.facebook(botOptions.credential, {
    apiOptions: botOptions.fcaOptions,
    pluginManager: pluginManager,
})
```

All done! Now, imagine a user sending a message with body: "/report Hello admin", the bot will reply "Sent: Hello admin". Now you can code what you want and create a wonderful bot 🌟

## Links

-   [**npmjs**](https://www.npmjs.com/package/kb2abot)

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested See the contribution guide if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our community [_KB2A Community_](https://www.facebook.com/groups/KB2A.Team/).
