import{_ as s,o as a,c as t,a as e}from"./app-D6rosZka.js";const p="/vuepress-blog/assets/extension-RVHnBFvx.png",o="/vuepress-blog/assets/extension-CJCNTSBJ.mp4",c={};function l(i,n){return a(),t("div",null,n[0]||(n[0]=[e('<h1 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h1><h2 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件"><span>vscode 插件</span></a></h2><h3 id="constant-extension" tabindex="-1"><a class="header-anchor" href="#constant-extension"><span>constant-extension</span></a></h3><h4 id="这是一款-vscode-插件-它能转换你的变量名为各种命名规则的格式" tabindex="-1"><a class="header-anchor" href="#这是一款-vscode-插件-它能转换你的变量名为各种命名规则的格式"><span>这是一款 VScode 插件，它能转换你的变量名为各种命名规则的格式</span></a></h4><h4 id="打开vscode-搜索constant-extension-或-浏览器安装-文档" tabindex="-1"><a class="header-anchor" href="#打开vscode-搜索constant-extension-或-浏览器安装-文档"><span>打开vscode 搜索constant-extension 或 <a href="https://marketplace.visualstudio.com/items?itemName=constant-extension-linjy.constant-extension&amp;ssr=false#overview" target="_blank" rel="noopener noreferrer">浏览器安装(文档)</a></span></a></h4><figure><img src="'+p+'" alt="constant-extension" tabindex="0" loading="lazy"><figcaption>constant-extension</figcaption></figure><video src="'+o+`" controls width="100%" height="auto" autoplay loop> 您的浏览器不支持视频标签。 </video><h2 id="npm-包" tabindex="-1"><a class="header-anchor" href="#npm-包"><span>npm 包</span></a></h2><h3 id="虚拟滚动条-scrollbar-vue2" tabindex="-1"><a class="header-anchor" href="#虚拟滚动条-scrollbar-vue2"><span>虚拟滚动条（scrollbar-vue2）</span></a></h3><h4 id="虚拟滚动条前查看" tabindex="-1"><a class="header-anchor" href="#虚拟滚动条前查看"><span>虚拟滚动条<a href="/frontend/#%E8%99%9A%E6%8B%9F%E6%BB%9A%E5%8A%A8%E6%9D%A1-scrollbar-vue2" target="_blank" rel="noopener noreferrer">前查看</a></span></a></h4><h3 id="sub-mitt" tabindex="-1"><a class="header-anchor" href="#sub-mitt"><span>sub-mitt</span></a></h3><h4 id="这是一个跨组件通讯的-sdk-sub-mitt" tabindex="-1"><a class="header-anchor" href="#这是一个跨组件通讯的-sdk-sub-mitt"><span>这是一个跨组件通讯的 sdk <a href="https://github.com/linxx5599/sub-mitt" target="_blank" rel="noopener noreferrer">sub-mitt</a></span></a></h4><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> sub-mitt</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> sub-mitt</span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> sub-mitt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h4><h5 id="es" tabindex="-1"><a class="header-anchor" href="#es"><span>es</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> SubMitt <span class="token keyword">from</span> <span class="token string">&#39;sub-mitt&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> subMitt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubMitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> subMitt<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//订阅消息</span></span>
<span class="line">client<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;res&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//发送消息</span></span>
<span class="line">subMitt<span class="token punctuation">.</span><span class="token function">pub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;send...&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">persistent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cjs" tabindex="-1"><a class="header-anchor" href="#cjs"><span>cjs</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> SubMitt <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sub-mitt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> subMitt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubMitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> subMitt<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//订阅消息</span></span>
<span class="line">client<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;res&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//发送消息</span></span>
<span class="line">subMitt<span class="token punctuation">.</span><span class="token function">pub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;send...&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">persistent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="浏览器引入" tabindex="-1"><a class="header-anchor" href="#浏览器引入"><span>浏览器引入</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/sub-mitt&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">const</span> subMitt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>SubMitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> subMitt<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//订阅消息</span></span>
<span class="line">client<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;res&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//发送消息</span></span>
<span class="line">subMitt<span class="token punctuation">.</span><span class="token function">pub</span><span class="token punctuation">(</span><span class="token string">&quot;TP_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;send...&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">persistent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const r=s(c,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/plugin/","title":"插件","lang":"cn-CN","frontmatter":{"date":"2024-11-18T00:00:00.000Z","category":["Plugin"],"tag":["tag E"],"sticky":10},"headers":[{"level":2,"title":"vscode 插件","slug":"vscode-插件","link":"#vscode-插件","children":[{"level":3,"title":"constant-extension","slug":"constant-extension","link":"#constant-extension","children":[]}]},{"level":2,"title":"npm 包","slug":"npm-包","link":"#npm-包","children":[{"level":3,"title":"虚拟滚动条（scrollbar-vue2）","slug":"虚拟滚动条-scrollbar-vue2","link":"#虚拟滚动条-scrollbar-vue2","children":[]},{"level":3,"title":"sub-mitt","slug":"sub-mitt","link":"#sub-mitt","children":[]}]}],"git":{"updatedTime":1731904309000,"contributors":[{"name":"linxx5599","email":"linxx5599@163.com","commits":1,"url":"https://github.com/linxx5599"}]},"filePathRelative":"plugin/README.md","excerpt":"\\n<h2>vscode 插件</h2>\\n<h3>constant-extension</h3>\\n<h4>这是一款 VScode 插件，它能转换你的变量名为各种命名规则的格式</h4>\\n<h4><a class=\\"header-anchor\\" href=\\"#打开vscode-搜索constant-extension-或-浏览器安装-文档\\"><span>打开vscode 搜索constant-extension 或 </span></a><a href=\\"https://marketplace.visualstudio.com/items?itemName=constant-extension-linjy.constant-extension&amp;ssr=false#overview\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">浏览器安装(文档)</a></h4>"}');export{r as comp,d as data};