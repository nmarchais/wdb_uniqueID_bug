# wdb_uniqueID_bug

Here is how to reproduce the following issue
(https://github.com/Nozbe/WatermelonDB/issues/1126):

Press on "Create records" button</Text>

Press on "Synchronize" button</Text>

Press a second time on "Synchronize" button --> bug occurs -->
activity or visit record previously created is pushed again for
creation. Excepted behaviour: The second press on "Synchronize"
should push nothing.
