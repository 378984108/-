/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "activitySessionId=b575d16d-73d8-42a7-a7e5-00d31d020098; __cf_bm=Hg1jJjvn1Xs.lYfML71pkgHiDSMoiKGqSboSJhAdWis-1699710948-0-AahQIbnwB2PKghnIJ5mYqnPEyZ18kpgnaGlvK7CNs6Aif9NAEqV6mfLog/8ktGsCbYitV6VANqAUj86em7zB0ys=; cf_clearance=ITWW8TD9pfLrKRIHrdjQhfWCKf.T2QrgTn2irSyTi3o-1699710948-0-1-a7171601.ba95c55c.f01649e1-0.2.1699710948; __ssid=88b4d01cfa7abf82b2fb222384bd2db; __stripe_mid=f3bf3793-1f9b-4e43-8575-29bcac861945a5d26c; __stripe_sid=d20e8f0d-96a6-4126-98a4-da981fcf9fcc1b8b32; sessionKey=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; intercom-device-id-lupk8zyo=afa115fd-6921-40ea-b93d-e1832f8174bc; intercom-session-lupk8zyo=clNNdE4rY3g2ckFWSk83dHowaHVpVEVieE1JZWxVa2x0Rit1U283N0g0SkVrOHVKc0F1WlVCUDhOQlZBeGxEWC0tM0IvZHdlWFdrbmh1YlRsWHZQNDhIZz09--98344f77c74a391f029388202456de95108ed43f",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "BufferSize": 8,
    "SystemInterval": 3,
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": false,
        "PreserveChats": false,
        "LogMessages": false,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */