<div align="center">
    <h1>git-stash-remote</h1>
</div>

`git-stash-remote` is a tool to stash your changes on the git remote. This can be useful when you need to switch workstations without creating an actual commit, to prevent commiting unfinished work to keep branches clean.

The changes are pushed to `stash/[id]` branches and are deleted once popped.

## Installation

```console
npm i -g git-stash-remote
```

## Usage

### Pushing

```console
git-stash-remote push [id]
```

If left blank, a default ID based on the current time will be provided.

### Popping

```console
git-stash-remote pop [id]
```

If left blank, a remote stash will be able to be selected via interface. Popping a stash also deletes it from the remote.

## License

This project is licensed under the MIT License.
