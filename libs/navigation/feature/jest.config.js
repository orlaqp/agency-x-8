module.exports = {
    name: 'navigation-feature',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/navigation/feature',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
