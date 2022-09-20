#!/bin/bash
if [[ $1 == 'prod' ]]
then
  sed -i 's/handpoint.io/handpoint.com/g' docusaurus.config.js
  sed -i "s/developer.handpoint.io/developer.handpoint.com/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: true/includeCurrentVersion: false/g' docusaurus.config.js
  sed -i "s/organizationName: 'handpointdev'/organizationName: 'handpoint'/g" docusaurus.config.js
  sed -i "s/projectName: 'handpointdev.github.io'/projectName: 'handpoint.github.io'/g" docusaurus.config.js
  sed -i 's/handpoint.io/handpoint.com/g' src/pages/index.js
  sed -i 's/developer.handpoint.com/developer.handpoint.com/g' static/CNAME
else
  sed -i 's/handpoint.com/handpoint.io/g' docusaurus.config.js
  sed -i "s/developer.handpoint.com/developer.handpoint.io/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: false/includeCurrentVersion: true/g' docusaurus.config.js
  sed -i "s/organizationName: 'handpoint'/organizationName: 'handpointdev'/g" docusaurus.config.js
  sed -i "s/projectName: 'handpoint.github.io'/projectName: 'handpointdev.github.io'/g" docusaurus.config.js
  sed -i 's/handpoint.com/handpoint.io/g' src/pages/index.js
  sed -i 's/developer.handpoint.com/handpointdev.github.io/g' static/CNAME
fi