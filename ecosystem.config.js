module.exports = {
  apps: [{
    name: 'node_routing',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-149-95-169.us-west-2.compute.amazonaws.com',
      key: '~/Desktop/node_routing/ec2_expressv1.pem',
      ref: 'origin/master',
      repo: 'https://github.com/bryceroche/node_routing',
      path: '/home/ubuntu/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}