export const kNoCompileOptions = 0;
export const kConsumeCodeCache = 1;
export const kEagerCompile = 2;

export const kNoCacheNoReason = 0;
export const kNoCacheBecauseCachingDisabled = 1;
export const kNoCacheBecauseNoResource = 2;
export const kNoCacheBecauseInlineScript = 3;
export const kNoCacheBecauseModule = 4;
export const kNoCacheBecauseStreamingSource = 5;
export const kNoCacheBecauseInspector = 6;
export const kNoCacheBecauseScriptTooSmall = 7;
export const kNoCacheBecauseCacheTooCold = 8;
export const kNoCacheBecauseV8Extension = 9;
export const kNoCacheBecauseExtensionModule = 10;
export const kNoCacheBecausePacScript = 11;
export const kNoCacheBecauseInDocumentWrite = 12;
export const kNoCacheBecauseResourceWithNoCacheHandler = 13;
export const kNoCacheBecauseDeferredProduceCodeCache = 14;

export const SourcePositionTableBuilder_RecordingMode_OMIT_SOURCE_POSITIONS = 0;
export const SourcePositionTableBuilder_RecordingMode_LAZY_SOURCE_POSITIONS = 1;
export const SourcePositionTableBuilder_RecordingMode_RECORD_SOURCE_POSITIONS = 2;