# What is Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
-- OpenSource.com

Build - Ship - Run

# What are containers?

Using containers, everything required to make a piece of software run is packaged into isolated containers. Unlike VMs, containers do not bundle a full operating system - only libraries and settings required to make the software work are needed. This makes for efficient, lightweight, self-contained systems that guarantees software will always run the same, regardless of where it’s deployed.
-- Docker.com

# Why Docker?

  * Resource efficient
    * Just process group (avoid redundancy: shared libraries, host OS, etc)
    * Layered filesystems keep images "small" (leverage common layers)
  * Stateless (by themselves)
  * Isolated (dedicated network interface for cluster)

# Docker + Node

Creating a Docker image (self contained application) requires a `Dockerfile`.  Dockerfile 
is a recipe for building a container.  For Node, the recipe should include:

  * Version of node
  * Pulling in dependencies
  * Private modules
  * Build scripts (run `npm test` during build)
  * Environment variables (setting production, but also others)
  * Ports to expose
  * Script to run (default: `npm start`)

# dockergen

  * CLI to streamline creation of Dockerfile
  * Store configuration in package.json

Deploy presentation as using dockergen?

