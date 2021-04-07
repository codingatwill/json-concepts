# OPEN-SCHEMA

This is an experimental project to see if it is possible to create
an application with multiple tech stack, and still no duplication
of any concepts within a project.

## Tasks

- [x] in transformation files replace $path with $select
- [x] array support in transformation
- [x] fix bug in buildr.js/after
- [x] parent support in transformation views -> JSONata has it
- [x] index support in transformation views -> JSONata has it
- [x] make transformation string functions extensible -> JSONata has it
- [x] template language to support in target file type -> Codestache will have it
  - [x] js: loops using comments `/* #each domain */`, variables underscore `_name_`
- [ ] try app for json concepts, see try.jsonata.org
- [ ] migrate from mustache to handlebars
- [ ] remove views, transform directly to schema (todoServer, todoClient)
- [ ] support /# in meta schema -> json merger
- [ ] build.js
  - [ ] directory structure config should be explicit
  - [ ] builder pattern may be applied
- [ ] ui sample project
  - [x] business (dotnet)
    - [ ] gRpc(dotnet):
      - [x] generate proto
      - [ ] generate response fields
      - [ ] generate service class
      - [ ] generate startup configure services body
      - [ ] refactor and extend buildr
    - [ ] :database(mongo)
  - [ ] rest (go)
    - [ ] :gRpc(*)
  - [ ] graphQL (node)
    - [ ] :gRpc(*)
  - [ ] feed (react)
    - [ ] :rest(*)
  - [ ] feed (vue)
    - [ ] :graphQL(*)
  - [ ] board (angular)
    - [ ] :graphQL(*)

_PS: Any previous task was lost before converting this file to an .md file._
