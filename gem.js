   client.on('messageCreate', async (msg) => {
        if (msg.author.id === String(owoId) || msg.author.id === String(config.authorId)) {
            if (msg.content.toLowerCase().match("spent 5")) {
                if (msg.content.match(new RegExp(`${client.user.username}`))) {
                    console.log(`(${client.user.username}) out of gem`)
                    statusBot = false
                    let getChannel = await client.channels.cache.get(reportChannelId)
                    let gettingNewChannel = await client.channels.cache.get(cmds).send("owo use rakamlar")
                    let attachments = msg.attachments.map(e => e)
                    if (attachments.length == 0) return getChannel.send(`**[MSG]** ${msg.content}\n ${msg.guild ? `**[Server]** : ${msg.guild.name} (${msg.channel.name})\n<@${authorId}>` : ''}`)
                    return getChannel.send(`**[OwO]** ${msg.content}\nServer : [ ${msg.guild ? `**[Server]** : ${msg.guild.name} (${msg.channel.name})` : ''} ]\n**Link** : ${attachments[0].url || 'Null'}\n<@${authorId}>`)
                }
            }
        }