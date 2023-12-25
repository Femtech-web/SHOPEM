---
layout: default
title: Home
---

### Quickstart for documentation contributors

If you are a new or beginner contributor, we encourage you to read through the
[our detailed contributors
guide](https://docs.docker.com/opensource/code/). The guide explains in
detail, with examples, how to contribute. If you are an experienced contributor
this quickstart should be enough to get you started.

The following is the essential workflow for contributing to the documentation:

1. Fork the `docker/docker` repository.

2. Clone the repository to your local machine.

3. Select an issue from `docker/docker` to work on or submit a proposal of your
own.

4. Create a feature branch from `master` in which to work.

	By basing from `master` your work is automatically included in the next
	release. It also allows docs maintainers to easily cherry-pick your changes
	into the `docs` release branch.

4. Modify existing or add new `.md` files to the `docs` directory.

5.  As you work, build the documentation site locally to see your changes.

	The `docker/docker` repository contains a `Dockerfile` and a `Makefile`.
	Together, these create a development environment in which you can build and
	run a container running the Docker documentation website. To build the
	documentation site, enter `make docs` in the `docs` directory of your `docker/docker` fork:

		$ make docs
		.... (lots of output) ....
		docker run --rm -it  -e AWS_S3_BUCKET -p 8000:8000 "docker-docs:master" mkdocs serve
		Running at: http://0.0.0.0:8000/
		Live reload enabled.
		Hold ctrl+c to quit.


	The build creates an image containing all the required tools, adds the local
	`docs/` directory and generates the HTML files. Then, it runs a Docker
	container with this image.

	The container exposes port 8000 on the localhost so that you can connect and
	see your changes. If you use Docker Machine, the `docker-machine ip
	<machine-name>` command gives you the address of your server.

6.  Check your writing for style and mechanical errors.

	Use our [documentation style
	guide](https://docs.docker.com/opensource/doc-style/) to check style. There are
	several [good grammar and spelling online
	checkers](http://www.hemingwayapp.com/) that can check your writing
	mechanics.

7.  Squash your commits on your branch.

8.  Make a pull request from your fork back to Docker's `master` branch.

9.  Work with the reviewers until your change is approved and merged.
