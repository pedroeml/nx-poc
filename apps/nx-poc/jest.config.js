module.exports = {
  name: 'nx-poc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-poc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
