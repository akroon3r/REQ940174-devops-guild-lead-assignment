#!/bin/bash

# script used to rollback a particular deployment config object to it's previous image SHA

oc rollout undo --namespace=$NAMESPACE dc/$APPLICATION_NAME