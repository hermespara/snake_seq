gdjs.snake_95seq_95level1Code = {};
gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects3= [];
gdjs.snake_95seq_95level1Code.GDAObjects1= [];
gdjs.snake_95seq_95level1Code.GDAObjects2= [];
gdjs.snake_95seq_95level1Code.GDAObjects3= [];
gdjs.snake_95seq_95level1Code.GDTObjects1= [];
gdjs.snake_95seq_95level1Code.GDTObjects2= [];
gdjs.snake_95seq_95level1Code.GDTObjects3= [];
gdjs.snake_95seq_95level1Code.GDCObjects1= [];
gdjs.snake_95seq_95level1Code.GDCObjects2= [];
gdjs.snake_95seq_95level1Code.GDCObjects3= [];
gdjs.snake_95seq_95level1Code.GDGObjects1= [];
gdjs.snake_95seq_95level1Code.GDGObjects2= [];
gdjs.snake_95seq_95level1Code.GDGObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects3= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects1= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects2= [];
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects3= [];
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1= [];
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2= [];
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects3= [];


gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects = Hashtable.newFrom({"A": gdjs.snake_95seq_95level1Code.GDAObjects1, "T": gdjs.snake_95seq_95level1Code.GDTObjects1, "C": gdjs.snake_95seq_95level1Code.GDCObjects1, "G": gdjs.snake_95seq_95level1Code.GDGObjects1});
gdjs.snake_95seq_95level1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "T");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#F67E7E]T[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "A");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#00F6FF]A[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "G");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#00FF3B]G[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "C");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#D000FF]C[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


};gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects = Hashtable.newFrom({"snake_player": gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1});
gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects = Hashtable.newFrom({"A": gdjs.snake_95seq_95level1Code.GDAObjects1, "T": gdjs.snake_95seq_95level1Code.GDTObjects1, "C": gdjs.snake_95seq_95level1Code.GDCObjects1, "G": gdjs.snake_95seq_95level1Code.GDGObjects1});
gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects = Hashtable.newFrom({"A": gdjs.snake_95seq_95level1Code.GDAObjects1, "T": gdjs.snake_95seq_95level1Code.GDTObjects1, "C": gdjs.snake_95seq_95level1Code.GDCObjects1, "G": gdjs.snake_95seq_95level1Code.GDGObjects1});
gdjs.snake_95seq_95level1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "T");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#F67E7E]T[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "A");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#00F6FF]A[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "G");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#00FF3B]G[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "C");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSequence"), gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).concatenateString("[color=#D000FF]C[/color]");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1[i].setBBText("Ta séquence d'ADN:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


};gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects = Hashtable.newFrom({"snake_player": gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1});
gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595childObjects1Objects = Hashtable.newFrom({"snake_child": gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1});
gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects = Hashtable.newFrom({"snake_player": gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1});
gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595childObjects1Objects = Hashtable.newFrom({"snake_child": gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1});
gdjs.snake_95seq_95level1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_lights"), gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
gdjs.snake_95seq_95level1Code.GDAObjects1.length = 0;

gdjs.snake_95seq_95level1Code.GDCObjects1.length = 0;

gdjs.snake_95seq_95level1Code.GDGObjects1.length = 0;

gdjs.snake_95seq_95level1Code.GDTObjects1.length = 0;

{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setAngle(90);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.random(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)) - 1));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))));
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.randomInRange(40, 410), gdjs.randomInRange(20, 700), "");
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects1[i].setZOrder(0);
}
}
{ //Subevents
gdjs.snake_95seq_95level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].returnVariable(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")).setNumber(1);
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setAngle(90);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].returnVariable(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")).setNumber(2);
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setAngle(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].returnVariable(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")).setNumber(0);
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setAngle(-(90));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].returnVariable(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")).setNumber(3);
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setAngle(180);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariableNumber(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setX(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getX() - (4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariableNumber(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setX(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getX() + (4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariableNumber(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setY(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getY() - (4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariableNumber(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getVariables().get("snake_direction")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setY(gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getY() + (4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getX() > 400 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setX(30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getX() < 30 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setX(400);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getY() > 700 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setY(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].getY() < 20 ) {
        isConditionTrue_0 = true;
        gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[k] = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i];
        ++k;
    }
}
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1 */
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setY(700);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.snake_95seq_95level1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.snake_95seq_95level1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("G"), gdjs.snake_95seq_95level1Code.GDGObjects1);
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.snake_95seq_95level1Code.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects, gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10273420);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.snake_95seq_95level1Code.GDAObjects1 */
/* Reuse gdjs.snake_95seq_95level1Code.GDCObjects1 */
/* Reuse gdjs.snake_95seq_95level1Code.GDGObjects1 */
/* Reuse gdjs.snake_95seq_95level1Code.GDTObjects1 */
gdjs.copyArray(runtimeScene.getObjects("snake_score_object"), gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDAObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDTObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDTObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDCObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDGObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDGObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(4);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.random(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)) - 1));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))));
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDAObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDTObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDCObjects1ObjectsGDgdjs_9546snake_959595seq_959595level1Code_9546GDGObjects1Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.randomInRange(40, 400), gdjs.randomInRange(20, 680), "");
}
{ //Subevents
gdjs.snake_95seq_95level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
{gdjs.evtsExt__ShadowClones__AnimateShadowClones.func(runtimeScene, gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects, gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595childObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), 1, 0, 0, "", 3, true, true, true, true, true, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.snake_95seq_95level1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.snake_95seq_95level1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("G"), gdjs.snake_95seq_95level1Code.GDGObjects1);
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.snake_95seq_95level1Code.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_rectangle"), gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_score_object"), gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1[i].setColor("0;246;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDAObjects1[i].setColor("0;246;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDTObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDTObjects1[i].setColor("0;246;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDCObjects1[i].setColor("0;246;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDGObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDGObjects1[i].setColor("0;246;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setColor("0;246;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1[i].setColor("0;246;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1[i].setColor("0;246;255");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.snake_95seq_95level1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.snake_95seq_95level1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("G"), gdjs.snake_95seq_95level1Code.GDGObjects1);
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.snake_95seq_95level1Code.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_rectangle"), gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_score_object"), gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1[i].setColor("246;126;126");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDAObjects1[i].setColor("246;126;126");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDTObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDTObjects1[i].setColor("246;126;126");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDCObjects1[i].setColor("246;126;126");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDGObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDGObjects1[i].setColor("246;126;126");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setColor("246;126;126");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1[i].setColor("246;126;126");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1[i].setColor("246;126;126");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.snake_95seq_95level1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.snake_95seq_95level1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("G"), gdjs.snake_95seq_95level1Code.GDGObjects1);
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.snake_95seq_95level1Code.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_rectangle"), gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_score_object"), gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1[i].setColor("208;0;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDAObjects1[i].setColor("208;0;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDTObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDTObjects1[i].setColor("208;0;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDCObjects1[i].setColor("208;0;255");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDGObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDGObjects1[i].setColor("208;0;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setColor("208;0;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1[i].setColor("208;0;255");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1[i].setColor("208;0;255");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.snake_95seq_95level1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.snake_95seq_95level1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("G"), gdjs.snake_95seq_95level1Code.GDGObjects1);
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.snake_95seq_95level1Code.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_rectangle"), gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_score_object"), gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1);
{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1[i].setColor("0;255;59");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDAObjects1[i].setColor("0;255;59");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDTObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDTObjects1[i].setColor("0;255;59");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDCObjects1[i].setColor("0;255;59");
}
for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDGObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDGObjects1[i].setColor("0;255;59");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1[i].setColor("0;255;59");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1[i].setColor("0;255;59");
}
}{for(var i = 0, len = gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length ;i < len;++i) {
    gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1[i].setColor("0;255;59");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("snake_child"), gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1);
gdjs.copyArray(runtimeScene.getObjects("snake_player"), gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595playerObjects1Objects, gdjs.snake_95seq_95level1Code.mapOfGDgdjs_9546snake_959595seq_959595level1Code_9546GDsnake_95959595childObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "snake_death_scene", false);
}}

}


};

gdjs.snake_95seq_95level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595rectangleObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595backgroundObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595lightsObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595playerObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDAObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDAObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDAObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDTObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDTObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDTObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDCObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDCObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDCObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDGObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDGObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDGObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595score_9595objectObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595childObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595titleObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text1Objects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595bookObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595sequencing_9595text2Objects3.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDsnake_9595novaseqObjects3.length = 0;
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects1.length = 0;
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects2.length = 0;
gdjs.snake_95seq_95level1Code.GDNewSequenceObjects3.length = 0;

gdjs.snake_95seq_95level1Code.eventsList2(runtimeScene);

return;

}

gdjs['snake_95seq_95level1Code'] = gdjs.snake_95seq_95level1Code;
