gdjs.snake_95death_95sceneCode = {};
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects1= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects2= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects1= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects2= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects2= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1= [];
gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects2= [];


gdjs.snake_95death_95sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_death_score"), gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_death_sequence"), gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects1);
{for(var i = 0, len = gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects1.length ;i < len;++i) {
    gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects1.length ;i < len;++i) {
    gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects1[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "\"");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_rejouer_death"), gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1.length;i<l;++i) {
    if ( gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1[k] = gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1[i];
        ++k;
    }
}
gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "snake_seq_level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("\"");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_continuer_death"), gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1.length;i<l;++i) {
    if ( gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1[k] = gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1[i];
        ++k;
    }
}
gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "snake_alignment_scene", false);
}}

}


};

gdjs.snake_95death_95sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects1.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595scoreObjects2.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects1.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595death_9595sequenceObjects2.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects1.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595rejouer_9595deathObjects2.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects1.length = 0;
gdjs.snake_95death_95sceneCode.GDsnake_9595continuer_9595deathObjects2.length = 0;

gdjs.snake_95death_95sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['snake_95death_95sceneCode'] = gdjs.snake_95death_95sceneCode;
