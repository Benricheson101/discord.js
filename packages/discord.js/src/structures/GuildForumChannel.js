'use strict';

const GuildChannel = require('./GuildChannel');
const GuildForumThreadManager = require('../managers/GuildForumThreadManager');

/**
 * Represents a channel that only contains threads
 * @extends {GuildChannel}
 */
class GuildForumChannel extends GuildChannel {
  constructor(guild, data, client) {
    super(guild, data, client, false);
    super._patch(data);

    /**
     * A manager of the threads belonging to this channel
     * @type {GuildForumThreadManager}
     */
    this.threads = new GuildForumThreadManager(this);
  }
}

module.exports = GuildForumChannel;
