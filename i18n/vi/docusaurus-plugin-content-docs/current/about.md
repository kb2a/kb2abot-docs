---
sidebar_position: 1
---

# Giới thiệu

KB2ABot là một module viết bằng NodeJS, cho phép bạn tương tác với Chat API của Facebook và nhiều hơn thế nữa!

-   **Sử dụng mô hình OOP**
-   **Hiệu quả**
-   **Đơn giản**

## Cài đặt

Chúng tôi khuyến khích bạn sử dụng bản 16.14.0 LTS trở lên.

```bash
npm install kb2abot
yarn add kb2abot
pnpm add kb2abot
```

## Ví dụ

Tạo một command gửi report tới một Facebook user:

```js
import { Command } from 'kb2abot'

const receiverID = '100007723935647'

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
                receiverID
            )
            return `Sent report with following content: ${msg}`
        }

        return 'Error: Empty message not allowed'
    }
}

const reportCommand = new Report()
```

Thêm command trên vào plugin:

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

Tiếp tục thêm plugin trên vào plugin manager:

```js
import { PluginManager } from 'kb2abot'
const configDirectory = './config'
const userdataDirectory = './userdata' // relative to cwd

const pluginManager = new PluginManager(configDirectory, userdataDirectory)
await pluginManager.add(myPlugin)
```

Thêm plugin manager vào hook function:

```js
import { Deploy, Datastore } from 'kb2abot'
import { readHJSON } from 'kb2abot/util/common'

Datastore.init('./datastores') // If you dont init datastore, your bot will be freeze and throw timeout error

const botOptions = readHJSON('./bot.hjson') // Read and parse bot.hjson file (relative to cwd)
```

`botOptions` là tập hợp các config:

```js
const client = await Deploy.facebook(botOptions.credential, {
    apiOptions: botOptions.fcaOptions,
    pluginManager: pluginManager,
})
```

Xong rồi đấy! Bây giờ nếu user gửi tin nhắn "/report Hello admin" thì bot sẽ rep ngay lập tức "Sent report with following content: Hello admin".

## Liên kết ngoài

-   [**npmjs**](https://www.npmjs.com/package/kb2abot)

## Đóng góp

Trước khi tạo issue/PR, nhớ kiểm tra xem đã có ai đó hỏi về nó hay chưa nhé.

## Trợ giúp

Nếu trong quá trình sử dụng bạn gặp vấn đề hay thắc mắc về điều gì đó, hãy vào nhóm [_KB2A Community_](https://www.facebook.com/groups/KB2A.Team/), chúng tôi luôn sẵn sàng giúp đỡ bạn.
