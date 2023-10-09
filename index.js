#!/usr/bin/env node

const program = require('commander')
const models = require('./models/manage')

program
    .version('1.0.0')
    .description('World Cup 2018 Rossiya')

program
    .command('refresh')
    .alias('r')
    .description('get newest data from server.')
    .action( ()=> {
        models.refreshData();
    })

program
    .command('stadiums')
    .alias('st')
    .description('get all stadiums from data.')
    .action( ()=> {
        models.getStadiums();
    })

program
    .command('tv-channels')
    .alias('tv')
    .description('get all tv channels from data.')
    .action( ()=> {
        models.getTvChannels();
    })

program
    .command('teams')
    .alias('t')
    .description('get all teams from data.')
    .action( ()=> {
        models.getTeams();
    })

program
    .command('groups')
    .alias('g')
    .description('get all group match from data.')
    .action( ()=> {
        models.getGroupsMatch();
    })

program
    .command('groups <groupName>')
    .alias('gs')
    .description('get specific group group match from data from a-h.')
    .action((groupName) => {
        models.getMatchByGroupName(groupName);
    });

program.parse(process.argv);