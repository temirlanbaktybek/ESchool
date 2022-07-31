# ESchool


### Documentation

1. Чтобы скачать проект, запустите команду:

    ``git clone https://github.com/temirlanbaktybek/Eschool.git``


2. После скачивания запускаем backend(eschool) и frontend(eschoolapp) по отдельности
3. При запуске frontend пишем команды :

   ``npm install``
   ``npm start``
4. Затем заходим в браузер по адресу:
``http://localhost:4200/login``
5. Послу того как мы зашли по выше указанному адресу, вы должны ввести :
**login: tima** , 
  **password: 123**
  
6. Дальше вы проходите на страницу профиля, где будет таблицу студентов. Вы можете создать студента и удалить.


Ели при запуске выдает ошибку(org.codehaus.plexus.component.repository.exception.ComponentLookupException: com.google.inject.ProvisionException: Unable to provision, see the following errors:

1) Error injecting constructor, java.lang.NoSuchMethodError: org.apache.maven.model.validation.DefaultModelValidator: method 'void <init>()' not found
  at org.jetbrains.idea.maven.server.embedder.CustomModelValidator.<init>(Unknown Source)
  while locating org.jetbrains.idea.maven.server.embedder.CustomModelValidator
  at ClassRealm[maven.ext, parent: ClassRealm[plexus.core, parent: null]] (via modules: org.eclipse.sisu.wire.WireModule -> org.eclipse.sisu.plexus.PlexusBindingModule)
  while locating org.apache.maven.model.validation.ModelValidator annotated with @com.google.inject.name.Named(value="ide")

1 error
      role: org.apache.maven.model.validation.ModelValidator
  roleHint: ide)

    ## 
